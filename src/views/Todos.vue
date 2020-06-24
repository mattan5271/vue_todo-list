<template>
  <v-row justify="center">
    <v-col cols="4">
      <v-text-field type="text" label="タイトル" v-model="name" @keyup.enter="addTodo"></v-text-field>

      <v-btn color="info" @click="addTodo">
        <v-icon left>mdi-note-plus</v-icon>追加
      </v-btn>
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
        <tbody v-for="(todo, key) in todos" :key="key">
          <tr>
            <td>
              <input type="checkbox" v-model="todo.isDone" @click="updateIsDone(todo, key)" />
            </td>
            <td>
              <div v-if="!todo.edit">{{ todo.name }}</div>
              <span v-else>
                <v-text-field
                  type="text"
                  autofocus
                  v-model="todo.name"
                  @keyup.enter="updateName(todo, key)"
                  @blur="todo.edit=false"
                />
              </span>
            </td>
            <td>
              <v-btn icon @click="todo.edit=true">
                <v-icon>mdi-square-edit-outline</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn icon @click="deleteTodo(key)">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import store from "../store";

export default {
  created() {
    if (store.state.login_user !== null) {
      this.db = firebase.firestore();
      this.todosRef = this.db.collection("todos");
      this.todosRef.onSnapshot(querySnapshot => {
        const obj = {};
        querySnapshot.forEach(doc => {
          obj[doc.id] = doc.data();
        });
        this.todos = obj;
      });
    }
  },
  data() {
    return {
      db: null,
      todoRef: null,
      name: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todosRef.add({ name: this.name, isDone: false, edit: false });
      this.name = "";
    },
    updateIsDone(todo, key) {
      todo.isDone = !todo.isDone;
      this.todosRef.doc(key).update(todo);
    },
    deleteTodo(key) {
      if (confirm("本当に削除しますか？")) {
        this.todosRef.doc(key).delete();
      }
    },
    updateName(todo, key) {
      todo.edit = false;
      this.todosRef.doc(key).update(todo);
    }
  }
};
</script>