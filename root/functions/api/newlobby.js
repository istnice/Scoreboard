export async function onRequest(context) {
    await env.kv.put("test", "one");
    return new Response("Hello, world!")
}