import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { beforeAll, afterAll, afterEach, test, expect, describe } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

const server = setupServer(
  http.get("https://api.example.com/data", () => {
    return HttpResponse.json({ message: "Hello world" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetch hook", () => {
  test("it returns data when the fetch is succesful", async () => {
    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.data).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
      expect(result.current.data).toEqual({ message: "Hello world" });
    });
  });

  test("it errors when the fetch is unsuccessful", async () => {
    server.use(
      http.get("https://api.example.com/data", () => {
        return new HttpResponse(null, {
          status: 404,
          statusText: "Out of apples",
        });
      })
    );
    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.data).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toMatchSnapshot();
      expect(result.current.data).toBeNull();
    });
  });
});
