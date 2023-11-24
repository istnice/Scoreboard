export function onRequest(context) {
    let value = await env.kv.put("test", "one");
    return new Response("Hello, world!")
}