<template>
  <div>
    <!-- Basic Start -->
    <v-card class="mb-10">
      <v-card-title class="pb-0">
        <Title :text="'基本設定'" :icon="'create'" />
      </v-card-title>
      <v-card-text>
        <v-row no-gutters>
          <v-col sm="3" align-self="center" class="text-right">
            <span class="mr-6">タイトル</span>
          </v-col>
          <v-col sm="9">
            <v-text-field
              type="text"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Basic End -->
    <!-- Image Start -->
    <v-card class="mb-10">
      <v-card-title class="pb-0">
        <Title :text="'画像設定'" :icon="'photo'" />
      </v-card-title>
      <v-card-text>
        <v-row no-gutters>
          <v-col sm="3" align-self="center" class="text-right">
            <span class="mr-6">イメージ画像</span>
          </v-col>
          <v-col sm="9">
            <v-file-input
              :readonly="false"
              show-size
              clearable
              prepend-icon="add_a_photo"
              accept="image/*"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Image End -->
    <!-- Extra Start -->
    <v-card>
      <v-card-title class="pb-0">
        <Title :text="'その他設定'" :icon="'list_alt'" />
      </v-card-title>
      <v-card-text>
        <v-row no-gutters>
          <v-col sm="3" align-self="center" class="text-right">
            <span class="mr-6">イメージ画像</span>
          </v-col>
          <v-col sm="9">
            <v-file-input
              :readonly="false"
              show-size
              clearable
              prepend-icon="add_a_photo"
              accept="image/*"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Extra End -->
  </div>
</template>

<script>
import Title from '~/components/common/titleLogoForm.vue'

export default {
  components: {
    Title
  }
}
</script>
