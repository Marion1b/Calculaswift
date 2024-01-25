function affichage(touche){
    const ecran_affichage = document.createElement('div')
    ecran_affichage.innerHTML = touche
    ecran_affichage.className = 'signe'
    ecran.appendChild(ecran_affichage)
}
function delete_ecran(type, toEnable){
    Array.from(type)
    while(type.length != 0){
        for (let i of type){
            i.remove()
        }
    }
    Array.from(toEnable)
    for(let i of toEnable){
        i.removeAttribute('id')
    }
    ecran.style.backgroundImage="url('')"
}
function calcul(toDisable){
    const resultat = eval(ecran.textContent)
    const affichage = document.createElement('div')
    affichage.innerHTML = "=" + resultat
    affichage.className = 'resultat'
    ecran.appendChild(affichage)
    Array.from(toDisable)
    for(let i = 0; i<toDisable.length-1; i++){
        toDisable[i].setAttribute('id','disable')
    }
    ecran.style.backgroundImage="url('https://usagif.com/wp-content/uploads/2020/05/confetti.gif')"
}

const calculatrice = document.querySelector('.calculatrice')
const button = calculatrice.querySelectorAll('div')
const signe = document.getElementsByClassName('signe')
const resultat = document.getElementsByClassName('resultat')
const ecran = document.querySelector('.ecran')
const un = document.querySelector('.un')
un.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('1')
    }
})
const deux = document.querySelector('.deux')
deux.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('2')
    }
})
const trois = document.querySelector('.trois')
trois.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('3')
    }
})
const plus = document.querySelector('.plus')
plus.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('+')
    }
})
const quatre = document.querySelector('.quatre')
quatre.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('4')
    }
})
const cinq = document.querySelector('.cinq')
cinq.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('5')
    }
})
const six = document.querySelector('.six')
six.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('6')
    }
})
const moins = document.querySelector('.moins')
moins.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('-')
    }
})
const sept = document.querySelector('.sept')
sept.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('7')
    }
})
const huit = document.querySelector('.huit')
huit.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('8')
    }
})
const neuf = document.querySelector('.neuf')
neuf.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('9')
    }
})
const multiplication = document.querySelector('.multiplication')
multiplication.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('*')
    }
})
const zero = document.querySelector('.zero')
zero.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('0')
    }
})
const par1 = document.querySelector('.par1')
par1.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('(')
    }
})
const par2 = document.querySelector('.par2')
par2.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage(')')
    }
})
const division = document.querySelector('.division')
division.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('/')
    }
})
const egal = document.querySelector('.egal')
egal.addEventListener('click',function(event){
    calcul(button)
})
const virgule = document.querySelector('.virgule')
virgule.addEventListener('click',function(event){
    if(un.id === 'disable'){
        affichage('')
    }else{
        affichage('.')
    }
})
const del = document.querySelector('.delete')
del.addEventListener('click',function(event){
    delete_ecran(signe, button)
    delete_ecran(resultat, button)
})