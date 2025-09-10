<template>
	<div>
		<!-- <the-header> instead of using v-for everytime you have a element you want to circle use dynamic component
      <keep-alive>
        <component :is="active-goals"></component>
      </keep-alive>
    </the-header> -->
		<!-- <badge-list></badge-list> -->
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
    <user-info-multiple />
		<!-- <course-goals>
			<template #default="slotProps">
				<h2>{{ slotProps.item }}</h2>
				<p>{{ slotProps }}</p>
			</template>
		</course-goals> -->
		<!-- "If everything goes into just one slot, we don’t need a <template> — instead, we put the slot props directly on the custom component.-->
		<course-goals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps }}</p>
		</course-goals>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
	// local components
	components: {
		// 'the-header': TheHeader,
		// TheHeader: TheHeader,
		TheHeader,
		BadgeList,
		UserInfo,
		CourseGoals,
	},
	data() {
		return {
			activeUser: {
				name: 'Maximilian Schwarzmüller',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>