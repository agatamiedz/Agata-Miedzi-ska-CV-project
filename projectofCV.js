"use strict"
//Elements:

const btnContact = document.querySelector('.btncontactme');
const btnEducationalHistory = document.querySelector('.btneducationalhistory');
const btnWorkExperience = document.querySelector('.btnworkexperience');
const contactMeContent=document.querySelector('.contactme');
const workContent=document.querySelector('.workexperience');
const educationalContent=document.querySelector('.educationalhistory')
const communicate=document.querySelector('#clickBtn')

//functionality:
const btnfunctionality=function(btn,content){
    btn.addEventListener("click",function(){
    if (content.style.opacity!=100){
    content.style.opacity=100
    communicate.style.opacity=0}else
    { 
    content.style.opacity=0;
    communicate.style.opacity=0.5;
    }
})
};

btnfunctionality(btnContact,contactMeContent);
btnfunctionality(btnWorkExperience,workContent);
btnfunctionality(btnEducationalHistory,educationalContent);
