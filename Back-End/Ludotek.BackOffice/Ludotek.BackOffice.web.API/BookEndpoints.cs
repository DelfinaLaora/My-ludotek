using Ludotek.BackOffice.Core.Books.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using System.Reflection;
namespace Ludotek.BackOffice.web.API;

public static class BookEndpoints
{
    public static void MapBookEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/Book").WithTags(nameof(Book));

        _ = group.MapGet("/", () =>
        {
            return new[] { new Book() { Id = 1, Title = "Dune" }, new Book() { Id = 2, Title = "Le cycle des inhibiteurs" } };
        })
        .WithName("GetAllBooks")
        .WithOpenApi();

        group.MapGet("/{id}", (int id) =>
        {
            //return new Book { ID = id };
        })
        .WithName("GetBookById")
        .WithOpenApi();

        group.MapPut("/{id}", (int id, Book input) =>
        {
            return TypedResults.NoContent();
        })
        .WithName("UpdateBook")
        .WithOpenApi();

        group.MapPost("/", (Book model) =>
        {
            //return TypedResults.Created($"/api/Books/{model.ID}", model);
        })
        .WithName("CreateBook")
        .WithOpenApi();

        group.MapDelete("/{id}", (int id) =>
        {
            //return TypedResults.Ok(new Book { ID = id });
        })
        .WithName("DeleteBook")
        .WithOpenApi();
    }
}
