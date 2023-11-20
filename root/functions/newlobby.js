export default {
	async fetch(request, env, ctx) {
		await env.kv.put("test", 1)
		return new Response('Hello World!');
	},
};