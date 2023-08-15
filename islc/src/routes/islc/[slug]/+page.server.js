import { error } from '@sveltejs/kit';
import { tags } from './tags.js';

// @ts-ignore
export function load({ params }) {
	const cat = tags.find((cat) => cat.slug === params.slug);

    if (!cat) throw error(404);

	return {
		cat
	};
}