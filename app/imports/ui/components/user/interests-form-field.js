import { Template } from 'meteor/templating';

Template.Current_Class_Form_Field.onRendered(function onRendered() {
  this.$('.dropdown').dropdown();
});

