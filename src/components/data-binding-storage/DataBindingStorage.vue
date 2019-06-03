<template>
    <div>
        <b-card no-body>
            <b-tabs card v-model="tabIndex">
                <b-tab title="One" active :title-link-class="linkClass(0)">
                    <One/>
                </b-tab>
                <b-tab title="Two" :title-link-class="linkClass(1)">
                    <Two/>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>
    import One from '@/components/data-binding-storage/One'
    import Two from '@/components/data-binding-storage/Two'

    export default {
        name: 'DataBindingStorage',
        components: {
            One, Two
        },
        data() {
            return {
                tabIndex: 0
            }
        },
        methods: {
            linkClass: function (idx) {
                if (this.tabIndex === idx) {
                    return ['bg-primary', 'text-light']
                } else {
                    return ['bg-light', 'text-primary']
                }
            }
        }
    }
</script>