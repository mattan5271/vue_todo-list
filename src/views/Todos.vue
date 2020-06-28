<template>
  <v-row justify="center">
    <v-col cols="4">
      <v-text-field type="text" label="タイトル" autofocus v-model="name" @keydown.enter="trigger" />
      <v-flex text-right>
        <v-btn color="info" @click="addTodo">
          <v-icon left>mdi-note-plus</v-icon>追加
        </v-btn>
      </v-flex>
    </v-col>

    <v-col cols="8">
      <v-simple-table>
        <thead>
          <tr>
            <th>状態</th>
            <th>タイトル</th>
            <th />
            <th />
          </tr>
        </thead>

        <draggable tag="tbody">
          <tr v-for="(todo, key) in $store.state.todos" :key="key">
            <td>
              <input type="checkbox" v-model="todo.isDone" @click="updateIsDone(todo, key)" />
            </td>
            <td class="todo">
              <div v-if="!todo.edit" :class="{ done: todo.isDone }">{{ todo.name }}</div>
              <span v-else>
                <v-text-field
                  type="text"
                  autofocus
                  v-model="todo.name"
                  @keyup.enter="updateName(todo, key)"
                  @blur="todo.edit = false"
                />
              </span>
            </td>
            <td>
              <v-btn icon @click="todo.edit = true">
                <v-icon>mdi-square-edit-outline</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn icon @click="deleteTodo(key)">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </draggable>
      </v-simple-table>
      <br />

      <v-flex text-right>
        <v-btn color="error" @click="deleteAllTodo">
          <v-icon left>mdi-trash-can-outline</v-icon>全削除
        </v-btn>
      </v-flex>
    </v-col>
  </v-row>
</template>

<script>
import store from "../store";
import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { todosRef } from "../main";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addTodo() {
      if (this.name) {
        todosRef.add({
          user_id: firebase.auth().currentUser.uid,
          name: this.name,
          isDone: false,
          edit: false
        });
        this.name = "";
      } else {
        alert("タイトルを入力してください。");
      }
    },
    updateIsDone(todo, key) {
      todo.isDone = !todo.isDone;
      todosRef.doc(key).update(todo);
    },
    updateName(todo, key) {
      todo.edit = false;
      todosRef.doc(key).update(todo);
    },
    deleteTodo(key) {
      if (confirm("本当に削除しますか？")) {
        todosRef.doc(key).delete();
      }
    },
    deleteAllTodo() {
      if (Object.keys(store.state.todos).length !== 0) {
        if (confirm("本当に削除しますか？")) {
          Object.keys(store.state.todos).forEach(todo => {
            todosRef.doc(todo).delete();
          });
        }
      } else {
        alert("Todoが存在しません。");
      }
    },
    trigger(event) {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) return;
      this.addTodo();
    }
  },
  components: {
    draggable
  }
};
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
.todo:hover {
  cursor: grab;
}
.todo:active {
  cursor: grabbing;
}
</style>
