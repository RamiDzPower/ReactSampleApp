import React from 'react';
import PropTypes from 'prop-types';
import photoUrlDefault from 'images/rocket-avatar.png';

const RocketItem = ({
	date,
	launchName,
	name,
	number,
	payload,
	photoUrl,
	time,
  links,
}) => {
	return (
		<div className="RocketItem-item">
			<div className="RocketItem-item__image">
				<img
					src={photoUrl}
					alt="rocket item"
				/>
			</div>
			<div className="RocketItem-item__wrapper">
				<div className="RocketItem-item__header">
					<div className="RocketItem-item__content">
						<div className="RocketItem-item__title">
							<h2>{`${name} - ${payload} - Failed Mission`}</h2>
							<p>Launched on <strong>{date}</strong> at <strong>{time}</strong> from <strong>{launchName}</strong></p>
						</div>
						<div className="RocketItem-item__number">
							<strong>#{number}</strong>
							<span>Flight Number</span>
						</div>
					</div>
				</div>
				<ul className="RocketItem-item__footer">
					{
            links
            .map(({ name, link }, key) => 
              link && (
                <li key={key}>
                  <a 
                    href={link} 
                    title={name} 
                    target="_blank" 
                    className="RocketItem-item__link">
                    {name}
                  </a>
                </li>
              )
            )
					}
				</ul>
			</div>
		</div>
	);
};

RocketItem.propTypes = {
	launchName: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	name: PropTypes.string,
	photoUrl: PropTypes.string,
	payload: PropTypes.string,
  number: PropTypes.number,
  links: PropTypes.array,
};

RocketItem.defaultProps = {
	launchName: null,
	date: null,
	time: null,
	photoUrl: photoUrlDefault,
	payload: null,
	name: null,
  number: 0,
  links: [],
};

export default RocketItem;
