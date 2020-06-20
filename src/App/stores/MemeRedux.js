import ActionType from './EnumActionType';
import { createStore } from 'redux';
//etat initial avec valeurs 
const initialState = {memes:[{image:{id:2,url:"/img/cri.jpg"},titre:"",texts:[{value:"yes",x:10,y:"20"}],id:5},{image:{id:11,url:"/img/dog1.jpg"},titre:"",texts:[{value:"yes",x:10,y:10}],id:6}], meme: {
    titre: 'titre meme', 
    image: { id: 1, url: 'img/seigneur.jpg' }, 
    texts: [{ x: 15, y: 35, value: 'React is' }, { x: 65, y: 70, value: 'cool' }] 
} };

//creation du reducer qui renvoi toujours un nouvelle objet 
//issue de l'ancien Plus les modif.
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.UPDATE_CURRENT:
            // mise a jour du state avec la nouvelle valeur 
            //du meme en cours d'edition
            return {...state,meme:action.value}
        case ActionType.ADD_MEME:
            //effectuer le l'objet de nouvelle état constituer 
            //du contenu de lancien état
            return { ...state, memes: [...state.memes, action.value] };
        //selectionne un meme et le copie dans meme pour le rendre editable
        case ActionType.SET_CURRENT_MEME:
        //find sur une array retourne une array 
        return {...state,meme:state.memes.find((e)=>e.id===action.value[0])}
        //cas par defaut --> aucune action le state change pas 
        //  renvoi le même state sous la meme reference (sans changement)
        default: return state;
    }
}
//creation d'un store 
const memeStore=createStore(reducer);
//export de l'instance du magasin 
//chaque module qui l'importe aura la meme 
//instance de magasin --> meme contenu 
export default memeStore;
