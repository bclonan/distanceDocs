<template>
    <section>
        <FunnelBuilder-projectCard 
                  v-for="item in projectData"
                  :item="item"
                  :key="item.id"
        />
    </section>    
</template>

<script>
//import projectCard from 'projectCard.vue'
    
    export default {
        data () {
            return {
                projectData: [
                {
                    projectName : 'Name',
                    projectId : '123'
                },
                {
                    projectName : 'Name',
                    projectId : '123'
                }
                ]
                
            }
        },
        components: {
            //projectcard
        }
    }
</script>

