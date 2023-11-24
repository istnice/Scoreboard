export async function onRequest(context) {
    await context.env.kv.put("test", "one");
    return new Response("Hello, world!")
}