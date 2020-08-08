// 因为node环境不支持es6，所以不能使用export与import
const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a component', // 只是个描述
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入要创建的组件名称：',
    // validate函数，接收用户输入并回答哈希。true如果该值有效，则应返回，否则返回错误消息（String）。如果false返回，则提供默认错误消息。
    validate: notEmpty('name')
  }, {
    type: 'checkbox',
    name: 'block',
    message: '请选择所需的模板标签：',
    choices: [{
      name: '<template>',
      value: 'template',
      checked: true
    }, {
      name: '<script>',
      value: 'script',
      checked: true
    }, {
      name: '<style>',
      value: 'style',
      checked: true
    }],
    validate(value) {
      if (value.includes('script') === false && value.includes('template') === false) {
        return '至少需要一个<template>标签或者<script>标签。'
      }
      return true
    }
  }], // array of inquirer prompts
  actions: data => {
    console.log(data)
    const name = '{{properCase name}}'
    const actions = [{
      type: 'add',
      path: `src/components/${name}.vue`,
      templateFile: 'plop-templates/component/index.hbs',
      data: {
        name: name,
        template: data.block.includes('template'),
        script: data.block.includes('script'),
        style: data.block.includes('style')
      }
    }]
    return actions
  } // array of actions
}
