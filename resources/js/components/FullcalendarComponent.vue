<template>
    <div>
        <FullCalendar
            ref="pickupCalendar"
            defaultView="dayGridWeek"
            lang="de"
            contentHeight="auto"
            editable="true"
            startEditable="true"
            durationEditable="false"
            :header="header"
            :plugins="plugins"
            :events="events"
            v-on:eventDrop="eventDrop"
        ></FullCalendar>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction';

    export default {
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {
                plugins: [dayGridPlugin, interactionPlugin],
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: ''
                },
                events: [
                    { title: "Event Now", start: new Date() }
                ]
            }
        },
        methods: {
            eventDrop(eventInfo) {
                console.log(eventInfo);
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
