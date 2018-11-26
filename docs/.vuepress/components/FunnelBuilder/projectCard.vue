<template>
  <div class="column is-4">
    <div class="flex-card light-bordered light-shadow project-card card-overflow">
      <div class="header">
        <h4 class="no-margin-bottom">{{ item.projectName }}</h4>
        <!-- Task card dropdown -->
        <div class="dropdown is-right dropdown-trigger">
          <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span class="material-icons">more_vert</span>
          </div>
          <div class="dropdown is-right">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span class="material-icons">more_vert</span>
              </button>
            </div>
            <div class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p>Edit</p>
                </div>
                <div class="dropdown-item">
                  <p>Details</p>
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-item">
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="progress-block">
        <progress class="progress is-xs is-blue" value="100" max="100">100%</progress>
        <div class="task-count">
          <span class="sl sl-icon-check"></span>
          <span>2/8</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
         props: ['item'],      
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    
</style>