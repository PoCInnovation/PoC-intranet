import { objectType } from '@nexus/schema';

export default objectType({
	name: 'Role',
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.color();
		t.model.admin();
		t.model.add_role();
		t.model.recommend();
		t.model.write();
		t.model.add_member();
		t.model.create_pro();
		t.model.users();
	},
});
