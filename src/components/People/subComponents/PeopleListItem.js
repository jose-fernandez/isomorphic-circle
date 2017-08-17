import React from 'react';
import { Image } from 'react-bootstrap';
import { Wallpaper, PersonalInfo, Email, Location, Container } from '../styles';

const PeopleListItem = ({ people }) =>
  <Wallpaper
    style={{
      display: people.display ? 'block' : 'none',
    }}
  >
    <Container>
      <Image
        style={{ marginTop: '4%' }}
        src={people.picture.large}
        alt="profile" circle
      />
      <PersonalInfo>
        {people.name.title}. {
        people.valid ? people.name.first : '________'
      } {people.name.last}
      </PersonalInfo>
      <Location>
        {people.location.city} {people.location.postcode}, {people.location.state}
      </Location>
      <Email href="mailto:{{people.email}}">{people.email}</Email>
    </Container>
  </Wallpaper>
;


PeopleListItem.propTypes = {
  people: React.PropTypes.object.isRequired,
};

export default PeopleListItem;
