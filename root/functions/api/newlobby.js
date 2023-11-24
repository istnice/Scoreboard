export async function onRequest(context) {
    await kv.put("test", "one");
    return new Response("Hello, world!")
}