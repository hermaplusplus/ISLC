import { error } from '@sveltejs/kit';
import { tags } from './tags.js';
import { extras } from './extras.js';

// @ts-ignore
export function load({ params }) {
	const cat =   tags.find((cat) => cat.slug === params.slug);
	const ext = extras.find((ext) => ext.slug === params.slug);

    if (!cat) throw error(404);

	const d = {"cat":cat, "ext":ext}

	return {
		d
	};
}