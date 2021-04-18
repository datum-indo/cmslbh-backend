import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutIncidentLocationsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutIncidentLocationsInput";
import { RenamedcaseCreateWithoutIncidentLocationsInput } from "../inputs/RenamedcaseCreateWithoutIncidentLocationsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateNestedOneWithoutIncidentLocationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIncidentLocationsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutIncidentLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutIncidentLocationsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutIncidentLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;
}
