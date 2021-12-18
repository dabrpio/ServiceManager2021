using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CommandApi.Controllers;
using CommandApi.Dtos;
using CommandApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;
using CommandApi.Models;
using AutoMapper;
using FluentAssertions;

namespace Catalog.UnitTests;

    public class EmployeeControllerTests
    {
        private readonly Mock<IEmployeeRepo> repositoryStub = new();
        private readonly Mock<ILogger<EmployeeController>> loggerStub = new();
        private readonly Random rand = new();

        private static IMapper _mapper;
        
        public EmployeeControllerTests()
        {
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new CommandApi.Profiles.EmployeesProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task GetEmployeeById_WithUnexistingItem_ReturnsNotFound()
        {
            // Arrange
            repositoryStub.Setup(repo => repo.GetEmployeeById(It.IsAny<int>())).Returns((Employee)null);

            var controller = new EmployeeController(repositoryStub.Object, _mapper);

            // Act
            var result =  controller.GetEmployeeById(It.IsAny<int>());

            // Assert
            result.Result.Should().BeOfType<NotFoundResult>();



        }

        
    }





