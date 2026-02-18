import type { HomeAssistant } from "custom-card-helpers";
import type {
  CardActionConfig,
  CardActionConfirmation,
  NumberSensorCardConfig
} from "./types";

type ActionTrigger = "tap" | "hold" | "double_tap";

function fireEvent(
  node: EventTarget,
  type: string,
  detail: Record<string, unknown> = {}
) {
  const event = new Event(type, {
    bubbles: true,
    cancelable: false,
    composed: true
  });
  (event as Event & { detail: Record<string, unknown> }).detail = detail;
  node.dispatchEvent(event);
}

function getActionConfig(
  config: NumberSensorCardConfig,
  trigger: ActionTrigger
): CardActionConfig | undefined {
  if (trigger === "hold") {
    return config.hold_action ?? config.tap_action;
  }
  if (trigger === "double_tap") {
    return config.double_tap_action ?? config.tap_action;
  }
  return config.tap_action;
}

function shouldConfirm(
  hass: HomeAssistant,
  confirmation?: boolean | CardActionConfirmation
): boolean {
  if (!confirmation) {
    return true;
  }
  if (confirmation === true) {
    return window.confirm("Are you sure?");
  }
  if (
    confirmation.exemptions?.some((exemption) => exemption.user === hass.user.id)
  ) {
    return true;
  }
  return window.confirm(confirmation.text ?? "Are you sure?");
}

export function hasAction(config?: CardActionConfig): boolean {
  return !!config && config.action !== "none";
}

export async function runAction(
  node: HTMLElement,
  hass: HomeAssistant,
  cardConfig: NumberSensorCardConfig,
  trigger: ActionTrigger
) {
  const actionConfig = getActionConfig(cardConfig, trigger);
  if (!actionConfig || actionConfig.action === "none") {
    return;
  }
  if (!shouldConfirm(hass, actionConfig.confirmation)) {
    return;
  }

  switch (actionConfig.action) {
    case "more-info": {
      const entityId = actionConfig.entity ?? cardConfig.entity;
      if (entityId) {
        fireEvent(node, "hass-more-info", { entityId });
      }
      return;
    }
    case "toggle": {
      const entityId = cardConfig.entity;
      if (!entityId) {
        return;
      }
      const [domain] = entityId.split(".");
      await hass.callService(domain, "toggle", { entity_id: entityId });
      return;
    }
    case "navigate": {
      if (!actionConfig.navigation_path) {
        return;
      }
      window.history.pushState(null, "", actionConfig.navigation_path);
      fireEvent(window, "location-changed", { replace: false });
      return;
    }
    case "url": {
      if (actionConfig.url_path) {
        window.open(actionConfig.url_path, "_blank", "noopener");
      }
      return;
    }
    case "assist": {
      window.history.pushState(null, "", "/assist");
      fireEvent(window, "location-changed", { replace: false });
      return;
    }
    case "perform-action": {
      if (!actionConfig.perform_action) {
        return;
      }
      const [domain, service] = actionConfig.perform_action.split(".", 2);
      if (!domain || !service) {
        return;
      }
      await hass.callService(
        domain,
        service,
        actionConfig.data,
        actionConfig.target
      );
      return;
    }
    case "fire-dom-event": {
      fireEvent(node, "ll-custom", actionConfig);
      return;
    }
  }
}
