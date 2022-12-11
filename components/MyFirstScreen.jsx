import React from "react";
import AnimationComponent from "./_child/AnimationComponent";

const MyFirstScreen = () => {
	return (
		<section className="sm:flex-col md:flex-row w-[80%] sm:w-[90%] mx-auto flex justify-between gap-8 items-center" >
			<div className="left">
				<h1 className="sm:text-[34px] sm:leading-9 md:text-[74px] md:leading-[74px]" >
					Join 10+ million people excelling in
					<span className="blue">math and science</span>
				</h1>
				<h2>
					For lifelong learners of any age, Brilliant replaces lecture
					videos with hands-on, interactive problem solving. It’s a
					better (and more fun) way to learn.
				</h2>
				<div className="sm:block md:hidden">
                	<AnimationComponent/>
				</div>
                <button>
                    Get Started
                </button>
			</div>
			<div className="right sm:hidden md:block">
                <AnimationComponent/>
            </div>
		</section>
	);
};

export default MyFirstScreen;
