import { objectType } from '@nexus/schema';

export const User = objectType({
	name: 'User',
	definition(t) {
		t.model.id();
		t.model.mail();
		t.model.profil_pic();
		t.model.token();
		t.model.roles({
			pagination: false,
		});
		t.model.projects({
			pagination: false
		});
	},
});
