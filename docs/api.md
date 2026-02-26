# API Reference

## Overview

This document describes the public API for this project.

## Endpoints

### GET /health

Returns the health status of the service.

**Response**
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

### POST /api/process

Process a request.

**Request Body**
```json
{
  "input": "string",
  "options": {}
}
```

**Response**
```json
{
  "result": "string",
  "elapsed_ms": 42
}
```

## Error Codes

| Code | Description |
|------|-------------|
| 400  | Bad Request |
| 401  | Unauthorized |
| 404  | Not Found |
| 500  | Internal Server Error |
