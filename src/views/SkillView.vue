<template>
  <div class="">
    <BaseFolder title="Language" :skill="language" color="#adbf49"/>
    <BaseFolder title="Front-end" :skill="frontEnd" color="#4bdeff"/>
    <BaseFolder title="Back-end" :skill="backEnd" color="#e177dc"/>
    <BaseFolder title="Databases" :skill="bataBase" color="#927eff"/>
  </div>
</template>

<script setup>
import BaseFolder from "@/components/BaseFolder.vue";
import JS from "@/assets/images/js.png";
import TS from "@/assets/images/ts.png";
import HTML from "@/assets/images/html.png";
import CSS from "@/assets/images/css.png";
import TW from "@/assets/images/tw.png";
import Vue from "@/assets/images/vue.png";
import React from "@/assets/images/react.png";
import ReactNative from "@/assets/images/react_native.png";
import Node from "@/assets/images/node.png";
import Express from "@/assets/images/express.png";
import Sequelize from "@/assets/images/sequelize.png";
import MySql from "@/assets/images/mysql.png";
import Postgrest from "@/assets/images/postgresql.png";
const language = [
    {name: "JavaScript", img: JS},
    {name: "Typescript", img: TS},
]
const frontEnd = [
    {name: "HTML", img: HTML},
    {name: "CSS", img: CSS},
    {name: "Tailwind", img: TW},
    {name: "Vue", img: Vue},
    {name: "React", img: React},
    {name: "React Native", img: ReactNative},
]
const backEnd = [
    {name: "Node", img: Node },
    {name: "Express", img: Express },
    {name: "Sequelize", img: Sequelize },
]
const bataBase = [
    {name: "MySQL", img: MySql },
    {name: "PostgreSQL", img: Postgrest },
]
</script>

<style lang="scss" scoped>
</style>