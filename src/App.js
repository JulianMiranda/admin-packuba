import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './auth/Provider';
import {CustomLoginPage} from './auth/Login';
import Users from './components/users';
import Categories from './components/categories';
import SubCategories from './components/subcategories';
import Carnets from './components/carnets';
import Products from './components/products'; /* 
import Theme from './components/layout/Theme'; */
import {Layout} from './components/layout';
import Orders from './components/orders';
import Promotions from './components/promotions';
import PromotionsFinal from './components/promotionsFinal';
import Prices from './components/prices';

import themeReducer from './themeReducer';
import customRoutes from './routes';

/* import RolesReducer from './store/reducers/roles.reducer'; */
/* import RolesSaga from './store/sagas/roles.saga'; */

const App = (props) => {
	return (
		<Admin
			title="Packuba Admin"
			/* theme={Theme} */
			/* customSagas={[RolesSaga]} */
			/* customReducers={{roles: RolesReducer}} */
			dataProvider={dataProvider}
			authProvider={authProvider}
			loginPage={CustomLoginPage}
			layout={Layout}
			customRoutes={customRoutes}
			customReducers={{theme: themeReducer}}
		>
			{(permissions) =>
				permissions === 'ADMIN' && [
					<Resource
						options={{label: 'Negocios'}}
						name="categories"
						{...Categories}
					/>,
					<Resource
						options={{label: 'Negocios'}}
						name="subcategories"
						{...SubCategories}
					/>,
					<Resource options={{label: 'Usuarios'}} name="users" {...Users} />,
					<Resource options={{label: 'Ordenes'}} name="orders" {...Orders} />,
					<Resource
						options={{label: 'Promociones'}}
						name="promotions"
						{...Promotions}
					/>,
					<Resource
						options={{label: 'Abajo Promo'}}
						name="promotionsFinal"
						{...PromotionsFinal}
					/>,
					<Resource options={{label: 'Precios'}} name="prices" {...Prices} />,
					<Resource
						options={{label: 'Productos'}}
						name="products"
						{...Products}
					/>,
					<Resource options={{label: 'Carnets'}} name="carnets" {...Carnets} />
				]
			}
		</Admin>
	);
};

export default App;
