import MyComponent from '../../../../slices/Caracteristicas';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Caracteristicas'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"icono":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869"},"texto":[{"type":"paragraph","text":"Occaecat consequat id ad ad. Est pariatur sunt laboris irure eu in adipisicing ea et ut.","spans":[]}]}],"primary":{"titulo":"lonely","imagen_background":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"},"video_background":{"link_type":"Media","name":"mock","kind":"image","url":"https://source.unsplash.com/random","size":"10kB"},"leyenda":[{"type":"paragraph","text":"Anim ullamco anim exercitation.","spans":[]}]},"slice_type":"caracteristicas","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
