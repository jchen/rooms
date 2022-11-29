// organize-imports-disable-next-line
import FullCalendar from "@fullcalendar/react";
// organize-imports-disable-next-line
import googleCalendarPlugin from "@fullcalendar/google-calendar";
// organize-imports-disable-next-line
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import React from "react";
import tippy from "tippy.js";
import "tippy.js/themes/light.css";
import { RESOURCES } from "./config";
import {
  createEventSource,
  createResource,
  getGoogleCalendarLink,
  getManagedByDescription,
  getManagedByTag
} from "./utils";

export default class Calendar extends React.Component<{}> {
  render() {
    return (
      <FullCalendar
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        plugins={[resourceTimelinePlugin, googleCalendarPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "resourceTimelineDay,resourceTimelineWeek",
        }}
        initialView="resourceTimelineDay"
        resourceAreaWidth="250px"
        resourceGroupField="floor"
        resourceAreaColumns={[
          {
            field: "title",
            headerContent: "Room",
          },
        ]}
        resources={RESOURCES.map(createResource)}
        resourceLabelDidMount={this.handleResourceLabelDidMount}
        googleCalendarApiKey="AIzaSyDe8udGIxRswLCA6GFJOZZbHowpkttvhuw"
        editable={false}
        eventSources={RESOURCES.map(createEventSource)}
        themeSystem="bootstrap5"
        height="auto"
      />
    );
  }

  handleResourceLabelDidMount = (info: any) => {
    const link = document.createElement("a");
    link.href = getGoogleCalendarLink(info.resource.title) ?? "";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerText = info.resource.title;
    info.el.querySelector(
      ".fc-datagrid-cell-main"
    ).innerHTML = `<a class="roomlink" href="${link.href}" target="${link.target}" rel="${link.rel}">${link.innerText}</a>`;

    var tag = document.createElement("strong");
    // Set tag's id to the room name, with all symbols stripped
    tag.id = info.resource.title.replace(/[^a-zA-Z0-9]/g, "") + "_tag";
    console.log(info);
    tag.innerText = ` ${getManagedByTag(info.resource.title)} `;
    info.el.querySelector(".fc-datagrid-cell-main").appendChild(tag);
    tippy(`#${tag.id}`, {
      content: getManagedByDescription(info.resource.title),
      delay: [200, 0],
      allowHTML: true,
      theme: "light",
      placement: "right",
    });
  };
}
