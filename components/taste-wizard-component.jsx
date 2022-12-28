import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.7);
	padding: 0 2rem 2rem 2rem;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		padding: 1rem;
	}

	.extra-small {
		line-height: 1;
		font-size: .65rem;
		margin-top: 1rem;
	}
`;

const Wizard = styled.div`
	background: white;
	padding: 4rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
	box-shadow: rgba(50, 50, 93, 0.1) 0px 2px 4px 0px;

	@media (max-width: 768px) {
		padding: 3rem 1rem;
	}

	.swap-enter {
	  opacity: 0.01;
	}

	.swap-enter.swap-enter-active {
	  opacity: 1;
	  transition: opacity 500ms ease-in;
	}

	.swap-leave {
	  opacity: 1;
	}

	.swap-leave.swap-leave-active {
	  opacity: 0.01;
	  transition: opacity 300ms ease-in;
	}
`;

const Logo = styled.img`
	width: 160px;
	height: auto;
	margin: 0 auto 2rem auto;

	@media (max-width: 768px) {
		margin-bottom: 1.5rem;
	}
`;

const ProgressBar = styled.div`
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	width: 60%;
	background-color: #47D7AC;
	height: 8px;

	transition: width 150ms ease-in-out;

	&.next {
		width: 70%;
	}

	&.last {
		width: 80%;
	}
`;

const WizardTitle = styled.h3`
	font-family: -apple-system;
	font-size: 24px;
	color: #413B38;
	line-height: 1.25;
	font-weight: 700;
	margin: 0 0 .5rem 0;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 20px;
	}

	&.faded {
		opacity: .3;
	}
`;

const WizardSubtitle = styled.h3`
	text-align: center;
	font-family: -apple-system;
	font-size: 16px;
	color: #716D6A;
	line-height: 1.25;
	font-weight: 400;
	margin: 0 0 2rem 0;

	@media (max-width: 768px) {
		margin: 0 0 1.5rem 0;
		font-size: 14px;
	}

	&.faded {
		opacity: .3;
	}
`;

const Skip = styled.button`
	font-family: -apple-system;
	font-size: 16px;
	color: #413B38;
	line-height: 1.5;
	font-weight: 700;
	margin: 2rem 0 0 0;
	padding: 8px 32px;
	border-radius: 4px;
	transition: all 50ms ease;
	background: rgba(0,0,0,.0);

	&:hover {
		background: rgba(0,0,0,.02);
		cursor: pointer;
	}

	&.faded {
		opacity: .3;
	}

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

const Photo = styled.img`
	border-radius: 8px;
	box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
	font-family: -apple-system;
	font-size: 20px;
	color: #413B38;
	line-height: 1.25;
	font-weight: 700;
	margin: 0 0 .25rem 0;

	@media (max-width: 768px) {
		text-align: center;
		padding: 0 1rem;
		font-size: 18px;
	}
`;

const Subtitle = styled.h3`
	font-family: -apple-system;
	font-size: 16px;
	color: #716D6A;
	line-height: 1.25;
	font-weight: 400;
	margin: 0;

	@media (max-width: 768px) {
		text-align: center;
		padding: 0 1rem;
	}
`;

const Recipe = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "photo actions";
	grid-column-gap: 1rem;
	align-items: center;
	max-width: 800px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-row-gap: 1rem;
		grid-template-areas: "photo"
			"actions";
	}
`;

const Actions = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin-top: 1rem;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

const BubbleButton = styled.button`
	--background: #ffffff;
	--border: rgb(234, 236, 235);
	--borderHover: rgb(71, 215, 172);
	--text: #716D6A;
	--textChosen: rgba(255, 255, 255);
	--pseudoTextChosen: rgb(17, 168, 125);
	--textHover: rgb(38, 51, 47);
	--shadow: rgba(10, 22, 50, .24);
	--selectedColor: rgb(17, 168, 125);

	margin: 0 8px 0 0;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	width: 80px;
	height: 80px;
	background: var(--background);
	color: var(--text);
	line-height: 1;
	transition: transform .2s ease, box-shadow .2s ease, border-color 50ms ease;

	.text {
		z-index: 1;
		font-family: -apple-system;
		font-weight: 500;
		font-size: 14px;
	}

	.border {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 3px solid var(--border);
		transition: transform .2s ease,
            box-shadow .2s ease,
            border-color 100ms ease,
            background-color 100ms ease;
    z-index: 0;
	}

	&:hover {
		cursor: pointer;

		.text {
			color: var(--textHover);
		}
		.border {
			border-color: var(--borderHover);
			transform: scale(1.02);
		}
	}

	&:active {
		.border {
			transform: scale(.97);
		}
	}

	&.disabled {
		opacity: 50%;

		&:hover {
			pointer-events: none;
		}
	}

	&.active {
		color: var(--textChosen);
		pointer-events: none;

		.border {
			border: none;
			background-color: var(--selectedColor);
			box-shadow: none;
			animation: pop 150ms ease-in-out;
			animation-iteration-count: 1;
		}
	}

	&.pseudo {
		width: auto;
		padding: 0 4px;

		.border {
			border: none;
			display: none;
		}

		&.active {
			.text {
				color: var(--pseudoTextChosen);
				animation: pop 150ms ease-in-out;
				animation-iteration-count: 1;
			}
		}

		@keyframes pop {
	    from {
        transform: scale(.97);
	    }
	    20% {
        transform: scale(1.05);
	    }
	    to {
        transform: scale(1);
	    }
		}
	}
`;

const Restart = styled.button`
	font-family: -apple-system;
	font-size: 20px;
	color: #413B38;
	line-height: 1.5;
	font-weight: 600;
	margin: 2rem auto;
	padding: 8px 32px;
	border-radius: 32px;
	border: 2px solid rbga(0,0,0,.05);
	background: rgba(0,0,0,.0);
	transition: all 100ms ease;

	&:hover {
		background: rgba(0,0,0,.03);
		border: 2px solid rgba(0,0,0,0);
		cursor: pointer;
	}
`;

class TasteWizardAffinityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
					selected: ''
        };

        this.nextStep = this.nextStep.bind(this);
        this.renderRecipe = this.renderRecipe.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.reset = this.reset.bind(this);
    }

	nextStep() {
        this.setState({
					currentStep: this.state.currentStep + 1,
					selected: ''
        });
    }

	handleResponse(selected) {
        this.setState({ selected: selected }, () => {
            setTimeout(this.nextStep, 2000);
        });
    }

	reset() {
        this.setState({
					currentStep: 1,
					selected: ''
        })
    }

	renderRecipe(image, step, title, subtitle) {
        let likeBtnClass = classNames({
					active: this.state.selected === 'like',
					disabled: this.state.selected === 'love' || this.state.selected === 'notForMe'
        });

        let loveBtnClass = classNames({
					active: this.state.selected === 'love',
					disabled: this.state.selected === 'like' || this.state.selected === 'notForMe'
        });

        let notForMeBtnClass = classNames({
					pseudo: true,
					active: this.state.selected === 'notForMe',
					disabled: this.state.selected === 'love' || this.state.selected === 'like'
        });

        return (
                <>
									<div>
										<Photo src={image} />
                                    </div>
									<div>
										<Title>{title}</Title>
										<Subtitle>{subtitle}</Subtitle>
										<Actions>
											<BubbleButton className={likeBtnClass} onClick={() => this.handleResponse('like')} ontouchstart>
												<div className="border"></div>
												<div className="text">I like it</div>
                                            </BubbleButton>
											<BubbleButton className={loveBtnClass} onClick={() => this.handleResponse('love')} ontouchstart>
												<div className="border"></div>
												<div className="text">I love it</div>
                                            </BubbleButton>
											<BubbleButton className={notForMeBtnClass} onClick={() => this.handleResponse('notForMe')} ontouchstart>
												<div className="border"></div>
												<div className="text">Not for me</div>
                                            </BubbleButton>
                                        </Actions>
                                    </div>
                </>
                );
    }

	render() {
        const { currentStep } = this.state;

        let progressBarClass = classNames({
					next: this.state.currentStep === 2,
					last: this.state.currentStep === 3
        });

        let content = () => (
                <>
									<Recipe>
										{currentStep === 1 && this.renderRecipe("/assets/projects/taste-wizard-kung-pao.jpg", 1, "Kung Pao Cauliflower", "with Edamame Rice & Peanuts")}
										{currentStep === 2 && this.renderRecipe("assets/projects/taste-wizard-seared-steak.jpg", 2, "Seared Steak & Brown Butter Pan Sauce", "with Roasted Carrots & Potatoes")}
                                    </Recipe>
									{currentStep === 3 && <Restart onClick={() => this.reset()}>↖ Restart</Restart>}
                </>
                );

        return (
                <Container className="container">
									<Wizard>
										<ProgressBar className={progressBarClass} />
										<Logo src="/assets/projects/ms-logo.svg" />
										<WizardTitle className={this.state.currentStep === 3 ? 'faded' : ''}>Finally, how do you feel about these recipes?</WizardTitle>
										<WizardSubtitle className={this.state.currentStep === 3 ? 'faded' : ''}>Help us get a sense of what kinds of recipes you like!</WizardSubtitle>
										<Recipe>
											{currentStep === 1 && this.renderRecipe("/assets/projects/taste-wizard-kung-pao.jpg", 1, "Kung Pao Cauliflower", "with Edamame Rice & Peanuts")}
											{currentStep === 2 && this.renderRecipe("/assets/projects/taste-wizard-seared-steak.jpg", 2, "Seared Steak & Brown Butter Pan Sauce", "with Roasted Carrots & Potatoes")}
                                        </Recipe>
										{currentStep === 3 && <Restart onClick={() => this.reset()}>↖ Restart demo</Restart>}
										<Skip className={this.state.currentStep === 3 ? 'faded' : ''}>Or, skip and see your first box</Skip>
                                    </Wizard>
									<p class="extra-small">Meal affinity wizard created in React by Quinn Keast for the purpose of this case study.</p>
                </Container>
                );
    }
}

export default TasteWizardAffinityComponent;
