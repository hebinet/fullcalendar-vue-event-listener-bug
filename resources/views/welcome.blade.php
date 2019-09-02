<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title>Laravel</title>
    <!-- Styles -->

    <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}"/>

</head>
<body>
<div id="app">
    <h1>Event system not working</h1>
    <fullcalendar
        ref="pickupCalendar"
        default-view="dayGridWeek"
        lang="de"
        content-height="auto"
        editable="true"
        startEditable="true"
        durationEditable="false"
        :header="header"
        :plugins="plugins"
        :events="events"
        v-on:eventDrop="eventDrop"
    ></fullcalendar>

    <h1>Event system working due to wrapping into an component</h1>
    <fullcalendar-component></fullcalendar-component>
</div>

<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
