// organize-imports-disable-next-line
import FullCalendar from "@fullcalendar/react";
import { CssDimValue } from "@fullcalendar/core";
// organize-imports-disable-next-line
import googleCalendarPlugin from "@fullcalendar/google-calendar";
// organize-imports-disable-next-line
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useEffect, useRef, useState } from "react";
import tippy from "tippy.js";
import "tippy.js/themes/light.css";
import { RESOURCES } from "./config";
import {
  createEventSource,
  createResource,
  getGoogleCalendarLink,
  getManagedByDescription,
  getManagedByTag,
  getResourceNotes
} from "./utils";

export default function Calendar() {
  const calendarRef = useRef<FullCalendar>(null);
  const [pickedDate, setPickedDate] = useState<Date>();

  useEffect(() => {
    setPickedDate(calendarRef.current!.getApi().getDate())
  }, [])

  const goToDate = (date: Date | null) => {
    if (!date) return;
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.gotoDate(date.toISOString().split("T")[0]);
      setPickedDate(date)
    }
  };

  const responsiveResourceSize = (): CssDimValue => {
    return window.screen.width > 500 ? "225px" : "150px";
  };

  const handleResourceLabelDidMount = (info: any) => {
    const link = document.createElement("a");
    link.href = getGoogleCalendarLink(info.resource.title) ?? "";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerText = info.resource.title;
    info.el.querySelector(".fc-datagrid-cell-main").innerHTML = `<a class="roomlink" href="${link.href}" target="${link.target}" rel="${link.rel}">${link.innerText}</a>`;

    const tag = document.createElement("strong");
    tag.id = info.resource.title.replace(/[^a-zA-Z0-9]/g, "") + "_tag";
    tag.innerText = ` ${getManagedByTag(info.resource.title)} `;
    info.el.querySelector(".fc-datagrid-cell-main").appendChild(tag);
    const combinedContent = `Notes: ${getResourceNotes(info.resource.title)} <br/> ${getManagedByDescription(info.resource.title)}`;
    tippy(`#${tag.id}`, {
      content: combinedContent,
      delay: [200, 0],
      allowHTML: true,
      theme: "light",
      placement: "right",
    });
  };

  return (
    <div>
      {
        <div className="date-select">
          <DatePicker
            selected={pickedDate}
            showIcon
            onChange={(date) => {
              goToDate(date);
            }}
          />
        </div>
      }
      <FullCalendar
        ref={calendarRef}
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        plugins={[resourceTimelinePlugin, googleCalendarPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "resourceTimelineDay,resourceTimelineWeek",
        }}
        initialView="resourceTimelineDay"
        resourceAreaWidth={responsiveResourceSize()}
        resourceGroupField="floor"
        resourceAreaColumns={[{ field: "title", headerContent: "Room" }]}
        resources={RESOURCES.map(createResource)}
        resourceLabelDidMount={handleResourceLabelDidMount}
        googleCalendarApiKey="AIzaSyDe8udGIxRswLCA6GFJOZZbHowpkttvhuw"
        editable={false}
        eventSources={RESOURCES.map(createEventSource)}
        themeSystem="bootstrap5"
        height="auto"
        timeZone="America/New_York"
      />
    </div>
  );
}
