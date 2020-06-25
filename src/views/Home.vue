<template>
  <v-flex text-center>
    <img src="@/assets/logo.jpg" />

    <h1>
      タスクを細かく管理して、作業効率を上げよう！
    </h1>

    <h2>【このアプリで出来る事】</h2>

    <template>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="purple lighten-2" fill-dot right>
          <v-card>
            <v-card-title class="purple lighten-2">
              <v-icon dark size="42" class="mr-4">
                mdi-account
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                ユーザー認証
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="amber lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                TODO作成
              </h2>
              <v-icon dark size="42">
                mdi-square-edit-outline
              </v-icon>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="cyan lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="cyan lighten-1">
              <v-icon dark size="42" class="mr-4">
                mdi-square-edit-outline
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                TODO編集
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="red lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                TODO削除
              </h2>
              <v-icon dark size="42">
                mdi-trash-can-outline
              </v-icon>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="green lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="green lighten-1">
              <v-icon dark size="42" class="mr-4">
                mdi-gesture-double-tap
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                ドラッグ&ドロップ
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-flex>
</template>

<style lang="scss" scoped>
h2 {
  margin: 50px 0;
}
</style>
