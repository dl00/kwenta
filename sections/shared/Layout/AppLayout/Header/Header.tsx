import { FC } from 'react';
import styled from 'styled-components';

import { MobileHiddenView, MobileOnlyView } from 'components/Media';
import { HEADER_HEIGHT, zIndex } from 'constants/ui';

import { GridDivCenteredCol } from 'styles/common';
import media from 'styles/media';

import Logo from '../../Logo';

import Nav from './Nav';
import UserMenu from './UserMenu';
import MobileUserMenu from './MobileUserMenu';

const Header: FC = () => {
	const logo = <Logo />;

	return (
		<Container>
			<MobileHiddenView>
				<LogoNav>
					{logo}
					<Nav />
				</LogoNav>
				<UserMenu />
			</MobileHiddenView>
			<MobileOnlyView>
				<LogoNav>{logo}</LogoNav>
				<MobileUserMenu />
			</MobileOnlyView>
		</Container>
	);
};

const Container = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: ${zIndex.HEADER};
	${media.lessThan('md')`
		position: fixed;
		background-color: ${(props) => props.theme.colors.black};
		box-shadow: 0 8px 8px 0 ${(props) => props.theme.colors.black};
	`};
	> div {
		height: ${HEADER_HEIGHT};
		line-height: ${HEADER_HEIGHT};
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const LogoNav = styled(GridDivCenteredCol)`
	grid-gap: 24px;
`;

export default Header;
