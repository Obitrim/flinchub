import React from 'react';

import './Home.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';

const Index = (props) => {
  return (
    <>
    	<Banner heading="Heading" description="Description" />
    	<Container className="HomeView__Container">
    		<h1 className="ViewHeading">About Us</h1>
	    	<article className="HomeView__Row">
	    		<section className="HomeView__Col">
	    			<p className="HomeView__AboutText">
	    				Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ratione quidem perspiciatis consectetur nulla natus facilis, reiciendis
	    				accusamus fugit saepe voluptatibus magni iure amet quaerat illo corrupti consequatur doloremque molestias similique! lorem20
	    			</p>
	    			<img src="" />
	    		</section>
	    		<section className="HomeView__Col">
	    			<p className="HomeView__AboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum perspiciatis quae sequi cumque, laboriosam quis hic aliquam voluptatibus natus fugit sapiente doloribus omnis, optio quas, dignissimos officia alias accusamus aspernatur ullam? Natus, dolor. Illum perspiciatis vitae ipsa veritatis harum perferendis. Animi, excepturi corporis, culpa sint rerum fugiat doloribus, optio voluptatem exercitationem quidem minus molestias eos distinctio, quaerat sequi sed.</p>
	    			<p className="HomeView__AboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt aut iure iusto. Maiores, suscipit similique distinctio minima tempore amet, ullam ea rem, iure ipsum fugit accusamus veniam placeat. Odit.</p>
	    		</section>
	    		<section className="HomeView__Col"></section>
	    	</article>
	    	</Container>
    </>
  )
}

export default Index;