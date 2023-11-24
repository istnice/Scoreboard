export async function onRequest(context) {
    const value = await env.kv.put("test", "one");
    return new Response("Hello, world!")
}