import Route from '@ember/routing/route';


export default Route.extend({
    model(){
        // console.log('songs routes');
        // console.log(this.modelFor('bands.band'));
        return this.modelFor('bands.band');
    }
});
