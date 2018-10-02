import Route from '@ember/routing/route';
import  EmberObject, {computed}  from '@ember/object';
import { A } from '@ember/array';
import {dasherize} from '@ember/string'

let Band = EmberObject.extend({
    name: '',
    slug:computed('name',function(){
        // console.log('recomputing slug');
        return dasherize(this.name)
    })
})
let Song = EmberObject.extend({
    title:'',
    rating:0,
    band:''
})
export default Route.extend({
    model(){
        let blackDog = Song.create ({
            
            title:"Black dog",
            band : "Led zeppelin",
            rating:3
        })
        let yellowLedBetter = Song.create ({
            title:"Yellow ledbetter dog",
            band : "pearl jam",
            rating:4
        })
        let pretender = Song.create ({
            title:"the pretender",
            band : "foo fighters",
            rating:2
        })
        let daughter = Song.create ({
            title:"Daughter",
            band : "pearl jam",
            rating:2
        })

          let ledZepplin = Band.create ({name : "Led zeppelin", songs:A([blackDog])})
          let pearlJam = Band.create ({name : "pearl jam", songs:A([daughter, yellowLedBetter])})
          let fooFighters = Band.create ({name : "foo fighters", songs:A([pretender])});

          return A([ledZepplin, pearlJam, fooFighters])
        
    }
});
