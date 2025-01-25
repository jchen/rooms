import { RESOURCES, RoomResource } from "./config";

export function createEventSource(room: RoomResource) {
  return {
    id: room.id,
    googleCalendarId: room.calendarId,
    eventDataTransform: (eventData: any) => {
      // Add resourceID to each event
      eventData.resourceId = room.id;
      if (!eventData.title) {
        eventData.title = "Busy";
      } else if (eventData.title === "Block") {
        eventData.color = "gray";
      }
      return eventData;
    },
  };
}

export function createResource(room: RoomResource) {
  return {
    id: room.id,
    floor: room.floor,
    title: room.title,
    notes: room.notes,
  };
}

export function getManagedByTag(name: string) {
  /**
   * Returns 'M', 'R', or 'B' based on the room management of the room with name
   */
  const room = RESOURCES.find((r) => r.title === name);
  if (room) {
    switch (room.managedBy) {
      case "reception":
        return "R";
      case "mtas":
        return "M";
      case "consultants":
        return "C";
      case "registrar":
        return "B";
    }
  }
}

export function getManagedByDescription(name: string) {
  /**
   * Returns 'M', 'R', or 'B' based on the room management of the room with name
   */
  const room = RESOURCES.find((r) => r.title === name);
  if (room) {
    switch (room.managedBy) {
      case "reception":
        return "Reception-managed. If booking for a course, contact MTAs with booking and MTAs will forward to reception. For all other requests, email reception@cs.brown.edu";
      case "mtas":
        return "MTA-managed. This is a room dedicated for TA hours. Contact the MTAs with the hours request. ";
      case "consultants":
        return "Consultant-managed. This room is managed by the Sunlab consultants. If booking for a course, contact the MTAs and the MTAs will forward the request to the Sunlab consultants. For all other requests, request directly on the appropriate calendar.";
      case "registrar":
        return "Brown Registrar-managed. This room is typically managed by Brown, but availability has been given to the CS Department. For booking during available hours, contact the MTAs with the booking request. For all other requests, contact the university scheduler.";
    }
  }
}

export function getGoogleCalendarLink(name: string) {
  const room = RESOURCES.find((r) => r.title === name);
  if (room) {
    return `https://calendar.google.com/calendar/a/brown.edu/r?cid=${room.calendarId}`;
  }
}

export function getResourceNotes(name: string) {
  /**
   * Notes for a given room.
   */
  const room = RESOURCES.find((r) => r.title === name);
  if (room) {
    return room.notes
  }
  return "N/A."
}