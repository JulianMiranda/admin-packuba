import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '@material-ui/core';
import {MenuItemLink} from 'react-admin';

import users from '../users';
import orders from '../orders';
import categories from '../categories';
import subcategories from '../subcategories';
import products from '../products';
import SubMenu from './SubMenu';
import promotions from '../promotions';
import carnets from '../carnets';
import promotionsFinal from '../promotionsFinal';
import Prices from '../prices';
import Payment from '../payment';

const Menu = ({onMenuClick, dense, logout}) => {
	const [state, setState] = useState({
		menuCategories: false,
		menuUnits: false
	});

	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	const open = useSelector((state) => state.admin.ui.sidebarOpen);
	useSelector((state) => state.theme); // force rerender on theme change

	const handleToggle = (menu) => {
		setState((state) => ({...state, [menu]: !state[menu]}));
	};

	return (
		<div>
			{/* <SubMenu
				handleToggle={() => handleToggle('menuCategories')}
				isOpen={state.menuCategories}
				sidebarIsOpen={open}
				name="Categorías"
				icon={<categories.icon />}
				dense={dense}
			>
				<MenuItemLink
					to={`/categories`}
					primaryText="Categorías"
					leftIcon={<categories.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
				<MenuItemLink
					to={`/subcategories`}
					primaryText="SubCategorías"
					leftIcon={<subcategories.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
			</SubMenu> */}
			<MenuItemLink
				to={`/categories`}
				primaryText="Categorías"
				leftIcon={<categories.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/subcategories`}
				primaryText="SubCategorías"
				leftIcon={<subcategories.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/orders`}
				primaryText="Ordenes"
				leftIcon={<orders.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/users`}
				primaryText="Usuarios"
				leftIcon={<users.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/products`}
				primaryText="Productos"
				leftIcon={<products.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/carnets`}
				primaryText="Carnets"
				leftIcon={<carnets.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/promotions`}
				primaryText="Promociones"
				leftIcon={<promotions.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/promotionsFinal`}
				primaryText="Promo Abajo"
				leftIcon={<promotionsFinal.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/prices`}
				primaryText="Precios"
				leftIcon={<Prices.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/payments`}
				primaryText="Pago"
				leftIcon={<Payment.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			{isSmall && logout}
		</div>
	);
};

export default Menu;
