import Controller from '@ember/controller';

export default Controller.extend({
    isAddingBand: false,
    actions:{
        addBand(){
            console.log("c'est ici pour ajouter un band");
            this.set('isAddingBand',true)
        },
        cancelAddBand(){
            this.set('isAddingBand',false)
        }
    }
});
