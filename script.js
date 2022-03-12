const menuBtn= document.querySelector(".menu-btn");
const menuWrapper= document.querySelector(".wrapper");

const helpBtn= document.querySelector(".help-btn");
const settingBtn= document.querySelector(".setting-btn");
const backSettingBtn= document.querySelector(".back-setting-btn");
const backHelpBtn= document.querySelector(".back-help-btn");

const menuDrop= document.querySelector(".menu-drop")
const settingDrop= document.querySelector(".setting-drop");
const helpDrop= document.querySelector(".help-drop")

menuBtn.onclick =(()=>{
    menuWrapper.classList.toggle("show");
    
});
settingBtn.onclick=(()=>{
    menuDrop.style.marginLeft="-400px";
    setTimeout(()=>{
        settingDrop.style.display="block";
    },100)
})
helpBtn.onclick=(()=>{
    menuDrop.style.marginLeft="-400px";
    setTimeout(()=>{
        helpDrop.style.display="block";
    },100)
})

backSettingBtn.onclick=(()=>{
    menuDrop.style.marginLeft="0px";
    settingDrop.style.display="none";
})
backHelpBtn.onclick=(()=>{
    menuDrop.style.marginLeft="0px";
    helpDrop.style.display="none";
})
