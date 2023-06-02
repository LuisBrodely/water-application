import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import InformationCard from './InformationCard'

export default function Information() {
  const poderVerde = [
  {
    title: 'El Poder del Verde: Limpieza sin Químicos',
    description: '¡Bienvenido/a al mundo verde y limpio! Sumérgete en nuestra sección de "El Poder del Verde: Limpieza sin Químicos" y descubre cómo cuidar el agua de forma divertida y ecológica.',
    img: 'https://images.pexels.com/photos/220989/pexels-photo-220989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: '¡Adiós Químicos! Hola Naturaleza: Beneficios de los productos de limpieza ecológicos y biodegradables',
    description: 'Dile adiós a los químicos y abraza la magia de la naturaleza. Descubre los beneficios de los productos de limpieza ecológicos y biodegradables, una opción segura y efectiva para cuidar el agua y el planeta.',
    img: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Súmate a la Revolución Verde: Tipos de productos de limpieza ecológicos',
    description: '¡La revolución verde está en marcha! Conoce una amplia gama de productos de limpieza ecológicos que te sorprenderán. Desde detergentes danzantes hasta limpiadores multiusos con superpoderes naturales, ¡todo sin químicos tóxicos!',
    img: 'https://images.pexels.com/photos/15863912/pexels-photo-15863912/free-photo-of-mar-playa-arena-oceano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'El Arte de la Creación Verde: Cómo hacer tus propios productos de limpieza caseros',
    description: '¡Despierta al artista verde que llevas dentro! Aprende a crear tus propios productos de limpieza caseros y diviértete experimentando con ingredientes naturales. Es hora de poner tu toque personal en la limpieza.'
  },
  {
    title: 'Domina el Juego de la Limpieza Verde: Consejos para utilizar productos ecológicos de manera efectiva',
    description: '¡Es hora de dominar el juego de la limpieza verde! Descubre nuestros consejos infalibles para utilizar productos ecológicos de forma eficiente. Desde trucos secretos hasta técnicas avanzadas, te convertirás en un verdadero experto/a en la limpieza sostenible.'
  },
  {
    title: 'La Galería de los Verdes Invencibles: Marcas y opciones recomendadas',
    description: 'Explora la galería de los verdes invencibles y descubre las marcas y opciones más recomendadas en productos de limpieza ecológicos. Estas marcas heroicas ofrecen soluciones certificadas para una limpieza poderosa sin dañar el planeta.'
  },
  {
    title: 'Un Llamado a los Héroes Verdes: Conclusiones y acción',
    description: '¡Tú eres un héroe verde en potencia! Enfúndate tu capa de sostenibilidad y únete a nuestra llamada a la acción. Juntos, podemos cuidar el agua y el medio ambiente mientras hacemos de la limpieza una experiencia divertida y ecológica.'
  },
  ]

  const aguaSucia = [
    {
      title: '¡No seas un Agua Sucia!: Evita la Contaminación',
      description: 'Bienvenido/a a la sección "¡No seas un Agua Sucia!: Evita la Contaminación". Aquí encontrarás información y consejos prácticos para ayudarte a prevenir la contaminación del agua y proteger nuestro preciado recurso natural.',
      img: 'https://images.pexels.com/photos/14000677/pexels-photo-14000677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Comprendiendo la Importancia del Agua Limpia',
      description: 'Sumérgete en el fascinante mundo del agua limpia y descubre por qué es tan vital para nuestra supervivencia y el equilibrio de los ecosistemas. Aprenderemos sobre los impactos negativos de la contaminación del agua y cómo nuestras acciones pueden marcar la diferencia.',
      img: '',
    },
    {
      title: 'Desenmascarando a los Contaminantes',
      description: 'Descubre a los enemigos ocultos que amenazan la calidad del agua. Exploraremos los diferentes tipos de contaminantes, desde productos químicos tóxicos hasta desechos industriales, y cómo se infiltran en nuestros cuerpos de agua. Conocer al enemigo es el primer paso para vencerlo.',
      img: '',
    },
    {
      title: '¡Tú Puedes Detener la Contaminación!',
      description: 'Empodérate con consejos y estrategias prácticas para evitar la contaminación del agua en tu vida diaria. Desde hábitos sencillos en el hogar hasta prácticas responsables en la jardinería y el cuidado de mascotas, descubrirás cómo convertirte en un defensor del agua limpia.',
      img: '',
    },
    {
      title: 'Revolución Verde: Opciones Sostenibles',
      description: 'Sumérgete en el mundo de las alternativas sostenibles y eco-amigables. Exploraremos opciones respetuosas con el medio ambiente, como productos de limpieza ecológicos, tecnologías de conservación del agua y métodos de agricultura sostenible. ¡Juntos, podemos marcar la diferencia!',
      img: '',
    },
    {
      title: 'Campañas y Movimientos: Unámonos por el Agua',
      description: 'Descubre las campañas y movimientos que buscan proteger y preservar el agua en todo el mundo. Conoce a organizaciones y activistas que están trabajando arduamente para concienciar sobre la importancia de la calidad del agua y unir a las comunidades en esta importante causa.',
      img: '',
    },
    {
      title: 'Juntos por un Futuro Sostenible',
      description: 'En esta sección, nos unimos para hacer frente a la contaminación del agua y construir un futuro sostenible. Aprende cómo puedes involucrarte en proyectos comunitarios, educar a otros sobre la importancia del agua limpia y marcar una diferencia positiva en tu entorno.      ',
      img: '',
    },
  ]

  const naturalezaFiltro = [
    {
      title: '¡El poder oculto de los bosques y humedales!',
      description: `Descubre cómo estos ecosistemas actúan como verdaderos filtros naturales, purificando y mejorando la calidad del agua. Aprende sobre su importante papel y cómo puedes protegerlos.`,
      img: '',
    },
    {
      title: '¡Bosques: los guardianes acuáticos!',
      description: 'Explora cómo los bosques actúan como protectores de nuestros recursos hídricos. Descubre cómo las raíces de los árboles y la vegetación absorben y retienen contaminantes, preservando la calidad del agua que fluye en ríos y arroyos.',
      img: '',
    },
    {
      title: '¡Humedales: los artistas de la depuración!',
      description: 'Sumérgete en el fascinante mundo de los humedales y su capacidad única para filtrar y depurar el agua. Conoce cómo estas zonas húmedas actúan como verdaderos laboratorios naturales, eliminando toxinas y mejorando la calidad del agua que nos rodea.',
      img: '',
    },
    {
      title: '¡Conviértete en un defensor del agua y la naturaleza!',
      description: 'Descubre cómo tu compromiso y acciones diarias pueden marcar la diferencia en la protección de nuestros bosques y humedales. Aprende a ser un defensor del agua, promoviendo la conservación y participando en actividades de restauración de estos ecosistemas.',
      img: '',
    },
    {
      title: '¡Explora la belleza y la importancia de la naturaleza acuática!',
      description: 'Adéntrate en la fascinante biodiversidad de los bosques y humedales, y su estrecha relación con la calidad del agua. Explora la diversidad de plantas, animales y microorganismos que dependen de estos ecosistemas y aprende cómo su conservación es clave para nuestro bienestar.',
      img: '',
    },
  ]

  const ahorrandoAgua = [
    {
      title: '¡Descubre tus superpoderes de ahorro de agua en casa!',
      description: 'Explora diversas estrategias para reducir el consumo de agua en tu hogar. Desde soluciones sencillas en el baño y la cocina hasta la implementación de tecnologías más avanzadas, desbloquea tus superpoderes de ahorro y contribuye al cuidado del agua.',
      img: ''
    },
    {
      title: '¡Conviértete en un detective del agua!',
      description: 'Aprende a detectar y reparar fugas en tu hogar. Descubre cómo identificar señales de posibles fugas y cómo solucionarlas de manera rápida y eficiente. Conviértete en un detective del agua y mantén tu hogar libre de pérdidas innecesarias.',
      img: ''
    },
    {
      title: '¡Involucra a toda la familia en la misión de ahorro!',
      description: 'Crea conciencia en tu hogar sobre la importancia de utilizar el agua de manera responsable. Comparte consejos y trucos con tu familia y establece metas de ahorro de agua como un equipo. Juntos, pueden marcar la diferencia y convertirse en defensores del uso eficiente del agua.',
      img: ''
    },
  ]

  const misionAgua = [
    {
      title: '¡Despierta el poder educativo del agua!',
      description: 'Explora la fascinante historia y ciencia del agua. Aprende sobre su ciclo vital, su papel en los ecosistemas y cómo nuestra actividad humana puede afectar su calidad. Despierta tu curiosidad y comparte conocimientos sobre el agua con otros.',
      img: ''
    },
    {
      title: '¡Conviértete en un embajador del agua consciente!',
      description: 'Aprende a comunicar de manera efectiva la importancia de la calidad del agua. Descubre cómo puedes influir positivamente en tu comunidad, compartiendo información valiosa y promoviendo prácticas responsables en el uso y conservación del agua.',
      img: ''
    },
    {
      title: '¡El juego del cambio comienza en casa!',
      description: 'Explora formas de implementar cambios en tu vida diaria que promuevan la calidad del agua. Desde reducir el uso de productos químicos en el hogar hasta evitar la contaminación de fuentes de agua, descubre cómo cada acción cuenta y puede marcar la diferencia.',
      img: ''
    },
    {
      title: '¡Involúcrate y marca la diferencia!',
      description: 'Encuentra formas de participar en proyectos y organizaciones dedicadas a la protección y conservación del agua. Únete a iniciativas locales, participa en limpiezas de ríos y playas, y apoya programas educativos para crear un impacto tangible en tu entorno.',
      img: ''
    },    
  ]

  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <InformationCard
            title={'El Poder del Verde'}
            imgUrl={'https://images.pexels.com/photos/5711193/pexels-photo-5711193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            description={ poderVerde }
        />
        <InformationCard
            title={'No seas un Agua Sucia!'}
            imgUrl={'https://images.pexels.com/photos/14000677/pexels-photo-14000677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            description={ aguaSucia }
        />
        <InformationCard
            title={'La Naturaleza es el Filtro Mágico'}
            imgUrl={'https://images.pexels.com/photos/11890414/pexels-photo-11890414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            description={ naturalezaFiltro }
        />
        <InformationCard
            title={'Ahorrando H2O como un Pro'}
            imgUrl={'https://images.pexels.com/photos/4289045/pexels-photo-4289045.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            description={ ahorrandoAgua }
        />
        <InformationCard
            title={'Misión Agua Consciente'}
            imgUrl={'https://images.pexels.com/photos/15868139/pexels-photo-15868139/free-photo-of-agua-rio-nino-inundar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            description={ misionAgua }
        />
    </ScrollView>
  )
}