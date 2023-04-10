export async function revokeApiKey() {
  const res = await fetch("/api/api-key/revoke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // POST request without any body data to prevent CSRF in combination with samesite LAX cookies
  });

  const data = (await res.json()) as { error?: string };

  if (data.error) {
    throw new Error(data.error);
  }
}
