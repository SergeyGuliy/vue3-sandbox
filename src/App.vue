<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'form' }">form</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/app.css";
</style>
