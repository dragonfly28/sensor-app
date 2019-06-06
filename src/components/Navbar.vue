<template>
    <nav>
        <v-toolbar flat app >
        <v-toolbar-side-icon class="black--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase black--text">
            <span class="font-weight-bold">Sensor App</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="black">
            <span>Verlassen</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="indigo">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'dashboard', text:'Dashboard', route: '/'},
                {icon: 'wb_sunny', text:'Temperatur', route: '/temperature'}
            ]
        }
    }
}
</script>
